import GalleryComponents from './components/GalleryComponents'
import './App.css'


export default function App() {
  const galleryImages = [
    { 
      img: "./images//bookshelf-1.jpg"
    },
    {
      img: "./images//bookshelf-2.jpg"
    },
    {
      img: "./images//bookshelf-3.jpg"
    },
    {
      img: "./images//bookshelf-4.jpg"
    },
    {
      img: "./images//bookshelf-5.jpg"
    },
    {
    img: "./images//bookshelf-6.jpg"  
    }      
  ]
  return (
    <div className='App'>
      <br/>
      <div>
   Responsive Image Gallery

        </div>
      <br/><br/>

<GalleryComponents
  galleryImages={galleryImages}
  />

      <br/><br/>
   </div>
  )
}
