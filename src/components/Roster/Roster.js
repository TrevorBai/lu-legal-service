import React from 'react'
import './Roster.css'
import Staff from './Staff/Staff'

const Roster = props => {
  return (
    <section className="Roster">
      <h2>Our strength is our team</h2>
      <p>diam, aliquam ornare turpis dapibus eget. Etiam at malesuada metus. Proin interdum sapien nec ipsum scelerisque tempor. Aliquam erat volutpat.</p>
      <div className="row">
        <Staff 
          name="Michael Jordan"
          memoir="Etiam mauris risus, vulputate id volutpat a, ultricies non lacus. Nam ac mi eget libero fermentum eleifend ut eget eros. Praesent dui dolor, porta vitae mauris eu, consectetur euismod enim. Etiam vitae diam id sem tincidunt dignissim. Pellentesque sagittis eros leo. Donec vehicula fermentum ligula. Phasellus at urna eget eros accumsan porta id sit amet ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."
        />
        <Staff 
          name="Kobe Briant"
          memoir="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum hendrerit libero vitae consectetur. Praesent non mauris odio. Pellentesque eget viverra enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sollicitudin eros ut justo gravida. Maecenas a tellus sit amet justo pellentesque mattis eu sit amet odio. In sed velit eu dui porta dapibus nec vel quam."
        />
        <Staff 
          name="Tim Duncan"
          memoir="Nullam rutrum velit erat, convallis pharetra urna feugiat posuere. Curabitur in feugiat arcu. Morbi blandit sem sit amet faucibus auctor. Vestibulum pharetra ligula dapibus, molestie mi eget, scelerisque orci. Integer ac lectus laoreet, vehicula ipsum id, sodales tortor. In finibus maximus sapien a porttitor. Quisque porttitor, enim vestibulum iaculis viverra, risus elit ultricies nibh, a lacinia arcu est sed dolor. Donec ac eros maximus, aliquam orci sed, cursus turpis."
        />
      </div>
    </section>
  )
}

export default Roster