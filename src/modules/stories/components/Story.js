import React, { useState } from 'react';
import '../styles/index.scss';

const Story = (props) => {
    let story = props.story;
    let storyTitle = props.story.title;
    let duration = `${new Date(new Date().getFullYear() - props.story.created_at).getFullYear()} years back`;
    let link = document.getElementById('storyTitle');

    // needs to be improved - to highlight the selected text
    if (props.searchText && props.searchText.length > 0 && storyTitle && storyTitle.includes(props.searchText)) {
        if (link) {
            let regEx = new RegExp(props.searchText, "gi");
            let result = storyTitle.match(regEx);
            let modifiedTitle = '';
            let resultLength = result.length;
            for (let i = 0; i < resultLength; i++) {
                modifiedTitle = storyTitle.replace(result[i], `<em class="em">${result[i]}</em>`)

            }
            let paragraph = document.createElement('p');
            paragraph.innerHTML = modifiedTitle;
            if (link.parentNode) {
                link.parentNode.replaceChild(paragraph, link);
            }
        }
    }

    else if (link) {
        link.innerHTML = storyTitle;
    }
    //


    return (
        <article className="story">
            <div className="story-container">
                <div className="story-data">
                    <div className="story-title">
                        <a href="https://news.ycombinator.com/item?id=16582136" target="_blank">
                            <span id='storyTitle'>{story.title ? story.title : " No Title Found"}</span>
                        </a>
                        <a href="http://www.bbc.com/news/uk-43396008" target="_blank" className="story-link">(http://www.bbc.com/news/uk-43396008)</a>
                    </div>
                    <div className="story-meta">
                        <span>
                            <a href="https://news.ycombinator.com/item?id=16582136" target="_blank">{story.points} points</a>
                        </span>
                        ,<span className="story-separator">|</span>
                        <span>
                            <a href="https://news.ycombinator.com/user?id=Cogito" target="_blank">
                                <span>{story.author}</span>
                            </a>
                        </span>
                        <span className="story-separator">|</span>
                        <span><a href="https://news.ycombinator.com/item?id=16582136" target="_blank">{duration}</a>
                        </span>
                        <span className="story-separator">|</span>
                        <span>
                            <a href="https://news.ycombinator.com/item?id=16582136" target="_blank">{story.children ? story.children.length : story.num_comments} comments</a>
                        </span>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default Story;