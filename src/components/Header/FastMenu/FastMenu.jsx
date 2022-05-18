import FastMenuItem from './FastMenuItem/FastMenuItem';

const FastMenu = () => {
  const fastMenuTitles = ['Explore', 'Advertise', 'Blog'];
  return (
    <ul className="fastMenu">
      {fastMenuTitles.map((item) => (
        <FastMenuItem buttonTitle={item} key={item} />
      ))}
    </ul>
  );
};

export default FastMenu;
