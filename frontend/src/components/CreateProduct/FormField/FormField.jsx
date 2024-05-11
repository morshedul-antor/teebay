import { useForm } from 'react-hook-form'
import { Button, ErrorMessage, InputField } from '../../Atoms'
import classes from './FormField.module.css'

export default function FormField({ onSubmit, handleBack, formData, stage, field, label }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: formData,
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField>
                {stage === 1 ? <label>Select a title for your product</label> : <label>Select {label}</label>}
                {label === 'description' ? (
                    <textarea
                        rows="10"
                        {...register('description', {
                            required: true,
                            setValueAs: (value) => value,
                        })}
                        placeholder={`Enter ${label}`}
                        required
                    />
                ) : (
                    <input
                        {...register(field, {
                            required: true,
                        })}
                        placeholder={`Enter ${label}`}
                        required
                    />
                )}
            </InputField>

            {field === 'price' && (
                <div className={classes.flex}>
                    <InputField>
                        <label style={{ display: 'block', marginLeft: '-55%', marginBottom: '-10px' }}>Rent($)</label>
                        <input
                            {...register('rentPrice', {
                                required: true,
                            })}
                            placeholder="Enter rent"
                        />
                        {errors.rentPrice && <ErrorMessage marginTop="-8px" />}
                    </InputField>

                    <InputField>
                        <label className={classes.label}>Per</label>
                        <select>
                            <option value="">Per day</option>
                        </select>
                        {errors.field && <ErrorMessage marginTop="-8px" />}
                    </InputField>
                </div>
            )}

            <div className={classes.btn}>
                {stage === 1 ? <p style={{ visibility: 'hidden' }}>Back</p> : <p onClick={handleBack}>Back</p>}
                <Button title="Next" />
            </div>
        </form>
    )
}
