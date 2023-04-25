import Datas from '../../datas/data'
import { useNavigate, useParams } from 'react-router-dom'
import Collapse from '../../Components/Collapse/Collapse'
import '../../Styles/Housing.css'
import pinkstar from '../../assets/pinkStart.svg'
import greystar from '../../assets/greyStart.svg'
import Slideshow from '../../Components/Slideshow/Slideshow'
import Error from '../../Components/Error/error'

export default function Housing() {
    const id = useParams('id').id
    const data = Datas.filter((data) => data.id === id)

    if (data.length === 0) {
        return ( <Error/>)
    }
    const rating = data[0].rating
    const host = data[0].host.picture
    const hostName = data[0].host.name
    const equipment = data[0].equipments
    const description = data[0].description

    return (
        <>
            <main className="main">
                <Slideshow data={data[0]} alt={data[0].title} />
                <div className="HousingContent">
                    <div className="content">
                        <h1>{data[0].title}</h1>
                        <p>{data[0].location}</p>
                        <ul className="tags">
                            {data[0].tags.map((tag, index) => {
                                return <li key={index}>{tag}</li>
                            })}
                        </ul>
                    </div>
                    <div className="content ">
                        <div className="host">
                            <p>{hostName}</p>
                            <div className="hostImg">
                                <img src={host} alt={hostName} />
                            </div>
                        </div>
                        <div className="rating">
                            {[...Array(5)].map((star, index) => {
                                const rateValue = index + 1
                                return (
                                    <img
                                        key={index}
                                        src={
                                            rateValue <= rating
                                                ? pinkstar
                                                : greystar
                                        }
                                        alt="notation du logement"
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="housingCollapse">
                    <div className="collapse">
                        <Collapse title="Description" content={description} />
                    </div>
                    <div className="collapse collapseTag">
                        <Collapse title="Équipements" content={equipment} />
                    </div>
                </div>
            </main>
        </>
    )
}
