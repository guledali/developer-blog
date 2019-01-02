import React from 'react'

const Cards = ({ cards }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-6 offset-xs-3 mt-1">
          <div className="card flex-md-row mb-4 shadow-sm h-md-250 bg-dark rounded-0">
            <img
              src={cards.image.url}
              className="card-img-top"
              alt={cards.image.title}
            />
            <div className="card-body d-flex flex-column align-items-start">
              <h3 className="mb-0">
                <a className="text-warning">{cards.title}</a>
              </h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto text-white">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <button
                type="button"
                className="btn btn-warning btn-lg btn-block"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
