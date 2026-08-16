export default function Entry(props)
{
    console.log (props)
    return (
        
        <article className="journalEntry">
            
            <div className="main-img-container">
                <img src={props.img.src}
                alt={props.img.alt}
                className="mainImg"
                />
            </div>
            

            <div>
                <img src="/public/marker.png" alt="marker" className="marker" />
                <span>Japan</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View On Google Maps</a>
                <h2>{props.title}</h2>
                <p>{props.dates}</p>
                <p>{props.text}</p>
            </div>
        </article>
    )
}