// POTD - Photo Of The Day
import { useSelector } from 'react-redux';
import { potdSelector } from '../../../store/selectors/potd.selector';
import '../../../style/Potd.css';
import Form from '../../Header/Form/Form';

const Potd = () => {
  const photoOfTheDay = Array.from(useSelector(potdSelector).values());

  return (
    <section className="potd">
      {photoOfTheDay.map((photo) => (
        <img src={photo.urlFull} alt="" key={Math.random()} />
      ))}
      <div className="introduce">
        <h1>Unsplash</h1>
        <p>
          The internet&apos;s source of
          <a href="/#">freely-usable images.</a>
        </p>
        <p>Powered by creators everywhere</p>
        <Form />
      </div>
      <div className="potd__footer">
        <p>
          Photo of the Day by
          <a href="/#">{` ${photoOfTheDay.map((photo) => photo.author)}`}</a>
        </p>
        <p className="t-a">
          Read more about the
          <a href="/#"> Unsplash License</a>
        </p>
      </div>
    </section>
  );
};

export default Potd;
