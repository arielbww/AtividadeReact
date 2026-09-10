// Import TextInput.module.css
import styles from './TextInput.module.css'

export default function TextInput({ placeholder, maxLength, value, onChange }) {
    return (
        <div>
            <textarea
                className={styles.input}
                placeholder={placeholder}
                maxLength={maxLength}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}