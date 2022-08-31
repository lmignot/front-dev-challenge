import './posterImage.css';

interface PosterImageProps {
  src: string;
  altText: string;
}

function PosterImage(props: PosterImageProps) {
  const { src, altText } = props;
  return (
    <img src={src} alt={altText} className="poster-image" />
  )
}

export default PosterImage;