import { Component } from 'react';
import fetchImmages from 'helpers/api';

import Searchbar from 'components/Searchbar/Searchbar';
import Section from 'components/Section/Section';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1,
    totalPages: 0,
    // largeImageURL: '',
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchImmagesData();
      console.log('work'); //!
    }
  }

  getQuery = query => {
    this.setState({ searchQuery: query });
  };

  async fetchImmagesData() {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true });
    console.log(this.state.isLoading); //!
    try {
      const { data } = await fetchImmages(searchQuery, currentPage);
      // this.takeImmages(data);
      this.setState({ images: data.hits }); //!

      console.log(this.state.images);
      console.log('data', data); //!
    } catch (error) {
      // Report.failure('ERROR', `${error.message}`, 'Close'); //???
      console.log(error.message); //!
    } finally {
      this.setState({ isLoading: false });
    }
  }

  // takeImmages = data => {
  //   this.setState(prevState => ({
  //     images: [...prevState.images, ...data.hits],
  //   }));

  //   console.log(this.state.images);
  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, showModal, isLoading } = this.state;

    return (
      <>
        <Searchbar getQuery={this.getQuery} />
        {images.length > 0 && (
          <Section title="Image gallery">
            <ImageGallery data={images} />
            <Button text="Load more" />
          </Section>
        )}

        {isLoading && <Loader />}

        {showModal && (
          <Modal onClose={this.toggleModal}>{/* <img src= alt= /> */}</Modal>
        )}
      </>
    );
  }
}

export default App;
