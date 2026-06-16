export default function Button({ name, className }) {
    return (
        <button className={ `text-white rounded-full px-2 py-1 ${className}` }>
            { name }
        </button>
    )
}