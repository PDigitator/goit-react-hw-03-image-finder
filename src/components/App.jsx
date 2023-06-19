import { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import Section from 'components/Section/Section';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Searchbar />
        <Section title="Image gallery">
          {/* <ImageGallery /> */}
          <Button text="Load more" />
        </Section>

        {/* <Loader /> */}

        {showModal && (
          <Modal onClose={this.toggleModal}>{/* <img src= alt= /> */}</Modal>
        )}
      </>
    );
  }
}

export default App;
