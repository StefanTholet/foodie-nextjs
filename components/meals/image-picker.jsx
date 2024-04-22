'use client'

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'
const ImagePicker = ({ label, name }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (!file) {
      setSelectedImage(null)
      return
    }
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setSelectedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }

  const imageInputRef = useRef()
  const clickInput = () => {
    imageInputRef.current.click()
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!selectedImage ? (
            <p>No image picked yet.</p>
          ) : (
            <Image src={selectedImage} fill alt="Your selected image" />
          )}
        </div>
        <input
          onChange={handleImageSelect}
          ref={imageInputRef}
          className={classes.input}
          type="file"
          required
          id={name}
          name={name}
          accept="image/png, image/jpeg"
        />
        <button onClick={clickInput} className={classes.button}>
          Pick an Image
        </button>
      </div>
    </div>
  )
}

export default ImagePicker
