import React, { useState } from 'react';
import '../styles/index.scss';

const Story = (props) => {
    let story = props.story;
    let storyTitle = props.story.title;
    let link = document.getElementsByClassName(`storyTitle${props.story.id}`);
    if (props.searchText && props.searchText.length > 0 && storyTitle && storyTitle.includes(props.searchText)) {
        if (link) {
                let regEx = new RegExp(props.searchText, "gi");
                let result  = storyTitle.match(regEx);
                let modifiedTitle = '';
                let resultLength = result.length;
                for (let i =0 ; i< resultLength; i++)
                {
                    modifiedTitle = storyTitle.replace(result[i],`<em class="em">${result[i]}</em>`)

                }
                link.innerHTML = modifiedTitle;
            }
    }

    else if(link){
        link.innerHTML = storyTitle;
    }

    return (
        <article className="story">
            <div className="story-container">
                <div className="story-data">
                    <div className="story-title">
                        <a href="https://news.ycombinator.com/item?id=16582136">
                            <span className={`storyTitle${story.id}`}>{story.title ? story.title : " No Title Found"}</span>
                        </a>
                        <a href="http://www.bbc.com/news/uk-43396008" target="_blank" className="story-link">(http://www.bbc.com/news/uk-43396008)</a>
                    </div>
                    <div className="story-meta">
                        <span>
                            <a href="https://news.ycombinator.com/item?id=16582136">{story.points} points</a>
                        </span>
                        ,<span className="story-separator">|</span>
                        <span>
                            <a href="https://news.ycombinator.com/user?id=Cogito">
                                <span>{story.author}</span>
                            </a>
                        </span>
                        <span className="story-separator">|</span>
                        <span><a href="https://news.ycombinator.com/item?id=16582136">2 years ago</a>
                        </span>
                        <span className="story-separator">|</span>
                        <span>
                            <a href="https://news.ycombinator.com/item?id=16582136">{story.children ? story.children.length : story.num_comments} comments</a>
                        </span>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default Story;