import React from 'react'

export default function TextCard({ title, content }) {
    return (
        <section key={title}>
            <h2>{title}</h2>
            <p>{content}</p>
        </section>
    )
}
