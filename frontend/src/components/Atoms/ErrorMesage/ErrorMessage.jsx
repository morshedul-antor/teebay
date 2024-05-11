export default function ErrorMessage({ message, marginTop }) {
    return (
        <p style={{ marginTop: marginTop, color: 'var(--btn-cancel)', fontSize: '12px', textAlign: 'left' }}>
            {!message ? 'This field is required!' : message}
        </p>
    )
}
