import styles from './blogpost.module.css'

import { ThumbsUpButton } from "../../components/CardPost/ThumbsUpButton"
import { Author } from "../../components/Author"
import Typography from "../../components/Typography"
import { CommentList } from "../../components/CommentList"
import ReactMarkdown from 'react-markdown'
import { useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react"
import { ModalComment } from "../../components/ModalComment"

export const BlogPost = () => {

    const { slug } = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const navigate = useNavigate()
    const token = localStorage.getItem('access_token')

    const handleNewComment = (comment) => {
        setComments([comment, ...comments])
    }

    const handleDelete = (commentId) => {
        const isConfirmed = confirm('Tem certeza que deseja remover o comentário?')
        if (isConfirmed) {
            fetch(`http://localhost:3000/comments/${commentId}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}` 
                    },
            }).then(() => {
                setComments(oldState => oldState.filter(c => c.id != commentId))
            })    
        }
    }

    useEffect(() => {

        fetch(`http://localhost:3000/blog-posts/slug/${slug}`)
            .then(response => {
                if (response.status == 404) {
                    navigate('/not-found')
                }
                return response.json()
            })
            .then(data => {
                setPost(data)
                setComments(data.comments)
    })

    }, [slug, navigate])

    if (!post) {
        return null
    }

    return (
        <main className={styles.main}>
            <article className={styles.card}>
                <header className={styles.header}>
                    <figure className={styles.figure}>
                        <img
                            src={post.cover}
                            alt={`Capa do post de titulo: ${post.title}`}
                        />
                    </figure>
                </header>
                <section className={styles.body}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </section>
                <footer className={styles.footer}>
                    <div className={styles.actions}>
                        <div className={styles.action}>
                            <ThumbsUpButton loading={false} />
                            <p>
                                {post.likes}
                            </p>
                        </div>
                        <div className={styles.action}>
                            <ModalComment onSuccess={handleNewComment} postId={post?.id}/>
                            <p>
                                {comments.length}
                            </p>
                        </div>
                    </div>
                    <Author author={post.author} />
                </footer>
            </article>
            <Typography variant="h3">Código:</Typography>
            <div className={styles.code}>
                <ReactMarkdown>
                    {post.markdown}
                </ReactMarkdown>
            </div>
            <CommentList comments={comments} onDelete = {handleDelete}/>
        </main>
    )
}