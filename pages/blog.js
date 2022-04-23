import { loadPosts } from "../lib/fetch-posts"
let mensagem;
let mensagemSelecionada;

function Blog({ mensagem }) {
    return (
        <ul>
            {mensagemSelecionada.map((mensagem) => (
                <li>{mensagem}</li>
            ))}
        </ul>
    )
}


export async function getStaticProps() {
    const posts = await loadPosts()

    return { props: { posts }}
}

export default Blog;