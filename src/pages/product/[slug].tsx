import { useRouter } from "next/router"
import styles from './product.module.scss'

export default function Product() {
    const router = useRouter()
    return (
            <h1>{router.query.slug}</h1>
    )
}