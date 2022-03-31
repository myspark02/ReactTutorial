import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>
        <h1>Detail</h1>
        <img src={detail.background_image_original} alt="backround_image"/>
        <div>
            <h2>Description</h2>
            <p>{detail.description_full}</p>
           
            <h3>ranting: {detail.rating}</h3>
            <h3>runtime: {detail.runtime}</h3>
        </div>
    </div>
}
export default Detail;