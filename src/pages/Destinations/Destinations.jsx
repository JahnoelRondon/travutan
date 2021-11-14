import styles from './Destinations.module.css'

const Destinations = ({profile}) => {
  console.log(profile ? profile : '')
  return (
    <main className={styles.container}>
      <h1>
         {profile ? profile.name : ""}'s Favorite Destinations
      </h1>

      
      <div className={styles.flexContainer}>
        {
          profile.destinations ? 

          profile.destinations.map((profileDestination, idx) => (
            <div className={styles.destinationCard} key={idx}>
              <h4>{profileDestination.title}</h4>
              <img width="90%" src={profileDestination.image} alt='soon'/>
            </div>
          ))

          :

          ''
        }
      </div>


    </main>
  )
}
 
export default Destinations