import React from 'react'
import { Remarkable } from 'remarkable';

let md = new Remarkable({ html: true });

const RenderMD = (props) => {
    return <div dangerouslySetInnerHTML={{ __html: md.render(props.value) }} />
}

export { RenderMD }