
import { Component } from 'react';
// import PropTypes from 'prop-types';
import { LoadMoreBTN } from '../../button/LoadMoreBTN';

import { GalleryApi } from '../../../helpers/galery-fech';
import { DisplayImage } from '../displayImage/DisplayImage';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';
import  './Gallery.css';



export default class GalleryContent extends Component {
  state = {
    gallery: [],
    error: null,
    status: 'idle',
    page: 1,
  };
  async componentDidUpdate(prevProps) {
    const prevSearchQuery = prevProps.query;
    const nextSearchQuery = this.props.query;

    if (prevSearchQuery !== nextSearchQuery) {
      this.setState({ status: 'pending', page: 1 });

      try {
        const { hits, total } = await GalleryApi(nextSearchQuery, 1);
        Notiflix.Loading.standard();
        if (total === 0) {
          const error = new Error(
            'Sorry, there are no images matching your search query.'
          );
          this.setState({ error, status: 'rejected' });
          return;
        }

        this.setState(prevState => ({
          gallery: hits,
          status: 'resolved',
          page: prevState.page + 1,
        }));
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
      Notiflix.Loading.remove();
    }
  }

  loadMoreHandler = async () => {
    try {
      const { hits } = await GalleryApi(this.props.query, this.state.page);
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      this.setState({ error, status: 'rejected' });
    }
  };
  render() {
    const { gallery, error, status } = this.state;

    if (status === 'pending') {
      return <div>jd</div>;
    }

    if (status === 'rejected') {
      Notify.failure(`${error.message}`);
      return null;
    }

    if (status === 'resolved') {
      return (
        <>
          <div className={'Gallery'}>
            {gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
              <DisplayImage
                key={id}
                url={webformatURL}
                alt={tags}
                largeImage={largeImageURL}
              />
            ))}
          </div>
          <LoadMoreBTN onClick={this.loadMoreHandler}>Load more</LoadMoreBTN>
        </>
      );
    }

    return null;
  }
}