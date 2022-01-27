import React from 'react';

export function TruncateText(props) {
    function truncateText(text) {
        const MAX_LENGTH = 300;
        if (text.length > MAX_LENGTH) {
            return text.slice(0, MAX_LENGTH);
        }
        return text;
    }

    return <p>{truncateText(props.text)} {props.readMore ? props.readMore : ''}</p>;
}