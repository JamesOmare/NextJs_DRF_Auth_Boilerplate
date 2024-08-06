import Hero from '@/components/Hero'
import Feature from '@components/Features'


const Home = () => {

    return (
      <section className="md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 spacey-10">
        <Hero />
        <Feature />
      </section>
        
    )

}

export default Home