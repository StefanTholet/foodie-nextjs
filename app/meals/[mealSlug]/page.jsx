import { getMeal } from '@/lib/meals'
import Image from 'next/image'
import classes from './page.module.css'

// dynamic handling of metadata
export const generateMetadata = async ({ params }) => {
  const meal = await getMeal(params.mealSlug)
  return {
    title: meal.title,
    description: meal.summary,
  }
}

const MealDetails = ({ params }) => {
  const { mealSlug } = params
  const meal = getMeal(mealSlug)
  meal.instructions = meal.instructions.replace(/\n/g, '<br />')
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.main}>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  )
}

export default MealDetails
