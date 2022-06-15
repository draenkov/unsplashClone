// POTD - Photo Of The Day
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { potdSelector } from '../../../store/selectors/potd.selector';
import '../../../style/Potd.css';
import Form from '../../Header/Form/Form';

const Potd = () => {
  const photoOfTheDay = useSelector(potdSelector);

  return (
    <section className="potd">
      {photoOfTheDay.map((photo) => (
        <div className="potd__img" key={photo.urlFull}>
          <img src={photo.urlFull} alt="" />
        </div>
      ))}
      <div className="introduce">
        <h1>Unsplash</h1>
        <p>
          The internet&apos;s source of&nbsp;
          <Link to="/unsplashClone">freely-usable images.</Link>
        </p>
        <p>Powered by creators everywhere</p>
        <Form />
      </div>
      <div className="potd__footer">
        <p>
          Photo of the Day by
          <Link to="/unsplashClone">
            {`${photoOfTheDay.map((photo) => photo.author)}`}
          </Link>
        </p>
        <p className="t-a">
          Read more about the
          <Link to="/unsplashClone"> Unsplash License</Link>
        </p>
      </div>
    </section>
  );
};

export default Potd;
