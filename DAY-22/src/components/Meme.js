import { useState } from "react";

const Meme = ({ meme, setMeme }) => {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "tinkerbell_31",
    password: "79990201",
    boxes: []
  });
  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMeme({ ...meme, url: data.data.url });
      });
  };
  return (
    <div className="singlememe">
      <img src={meme.url} alt="" />
      <div>
        {[...Array(meme.box_count)].map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Enter caption ${index + 1}`}
            onChange={(e) => {
              const newBox = form.boxes;
              newBox[index] = { text: e.target.value };
              setForm({ ...form, boxes: newBox });
            }}
          />
        ))}

        {/* <input type="text" placeholder="enter caption" /> */}
      </div>
      <div>
        <button onClick={generateMeme}>Generate Meme</button>
        <button
          onClick={() => {
            setMeme(null);
          }}
        >
          Choose Template
        </button>
      </div>
    </div>
  );
};

export default Meme;
