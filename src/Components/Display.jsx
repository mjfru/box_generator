/* eslint-disable react/prop-types */
const Display = (props) => {
    const { boxColor } = props;
    return (
        <div>
            {
                boxColor.map( (color, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        backgroundColor: color,
                        height: "100px",
                        width: "100px",
                        margin: "20px"
                    }}>
                    </div>
                    )
                )
            }
        </div>
    );
}

export default Display;