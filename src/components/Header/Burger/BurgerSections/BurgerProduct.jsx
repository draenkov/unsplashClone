const BurgerProduct = () => {
  const sectionInfo = {
    title: 'Product',
    links: [
      'Developers/API',
      'Unsplash Dataset',
      'Unsplash for IOS',
      'Apps & Plugins',
    ],
  };

  return (
    <div className="burgerSection">
      <div className="burgerSection__title">
        <svg width="24" height="24" className="CnNKA" viewBox="0 0 24 24">
          <g
            clipRule="evenodd"
            stroke="#111"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M14 17.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011
            3.5-3.5 3.5-3.5-.875-3.5-3.5zM3 17.5c0-2.625.028-3.5 3.5-3.5s3.5.875
            3.5 3.5.011 3.5-3.5 3.5S3 20.125 3 17.5z"
            />
            <path
              opacity=".5"
              d="M14 6.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5
              3.5S14 9.125 14 6.5z"
            />
            <path
              d="M3 6.5C3 3.875 3.028 3 6.5 3s3.5.875 3.5 3.5.011
            3.5-3.5 3.5S3 9.125 3 6.5z"
            />
          </g>
        </svg>
        <h2>{sectionInfo.title}</h2>
      </div>
      <ul className="burgerSection__links">
        {sectionInfo.links.map((link) => (
          <li className="burgerSection__link" key={link}>
            <a href="/#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerProduct;
