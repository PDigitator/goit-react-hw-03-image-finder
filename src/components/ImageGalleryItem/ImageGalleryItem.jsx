// import PropTypes from 'prop-types';

import {
  Thumb,
  Image,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const ImageGalleryItem = ({
  element: { id, webformatURL, tags },
  deleteContact,
}) => {
  return (
    <>
      <Thumb>
        <Image src={webformatURL} alt={tags} />
      </Thumb>
    </>
  );
};

// ImageGalleryItem.propTypes = {
//   element: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

export default ImageGalleryItem;
