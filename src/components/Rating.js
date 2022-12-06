import React, { Component } from 'react';

class Rating extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            stars: [],
            rating: 0,
            hovered: 0,
            selectedIcon: "★",
            deselectedIcon: "☆"
        };

        let outOf = props.outOf ? props.outOf : 5;
        // let outOf = props.outOf ? props.outOf : 5;

        for (var i = 0; i < outOf; i++) {
            this.state.stars.push(i + 1);
        }
    }

    changeRating(newRating) {
        this.setState({
            rating: newRating
        });
        console.log(   this.state);

        if (this.props.onChange)
            this.props.onChange(newRating);
    }

    hoverRating(rating) {
        console.log(   this.state);

        this.setState({
            hovered: rating
        });
    }
    render() {

        const { stars, rating, hovered, deselectedIcon, selectedIcon } = this.state;

        return (
            <div style={{width: '100px'}} >

              <div className="rating    " >

                {stars.map(star => {
                    return (
                        <span
                        style={{cursor: 'pointer', fontSize: '20px', color: "#F6B0AB", boxSizing: 'border-box',  }}
                        // style={{  }}
                        onClick={() => { this.changeRating(star); }}
                        onMouseEnter={() => { this.hoverRating(star); }}
                        onMouseLeave={() => { this.hoverRating(0); }}
                        >
                            {rating < star ? hovered < star ? deselectedIcon : selectedIcon:selectedIcon}
                        </span>
                    );
                })}
                   {/* <h1>{rating}</h1> */}
                </div>
             </div>
         );
    }
}

export default Rating;
