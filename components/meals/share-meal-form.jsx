'use client'
import { useFormState } from 'react-dom'
import ImagePicker from './image-picker'
import MealsFormSubmit from './meals-form-submit'
import { shareMeal } from '@/lib/actions'
import classes from './share-meal-form.module.css'

const ShareMealForm = () => {
  const [state, formAction] = useFormState(shareMeal, { message: null })
  return (
    <form className={classes.form} action={formAction}>
      <div className={classes.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="10"
          required
        ></textarea>
      </p>
      <ImagePicker name="image" label="Your image" />
      <p className={classes.actions}>
        <MealsFormSubmit />
      </p>
      {state.message ? <p>{state.message}</p> : null}
    </form>
  )
}

export default ShareMealForm
