import React from 'react';
// import FormInfo from './components/FormInfo';
import Photo from './components/Photo';

// { this.state.images.map((image) => {
//   return <img src={image.images.thumbnail.url} />
// })}
class App extends React.Component{
  state = {
    images: [],
    Imagesss: []
  };
  getInsta = async (e) => {
    e.preventDefault()
    const TocenInfo = e.target.elements.tocen.value;
    // const UserInfo = e.target.elements.user.value;
    let num_photos = 40;
    let response = await fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + TocenInfo + '&count=' + num_photos);
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json();
          console.log(json)
          this.setState({ images: json.data })
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }
  }
  async componentDidMount(){
   
    let tokenS = '2682292758.1677ed0.c568be83a08a498794b5b18c0c4818d5';
    // const TocenInfo = e.target.elements.tocen.value;
    // const UserInfo = e.target.elements.user.value;
    let num_photos = 40;
    let responses = await fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + tokenS + '&count=' + num_photos);
    if (responses.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let jsonZ = await responses.json();
          console.log(jsonZ)
          this.setState({ Imagesss: jsonZ.data })
    } else {
        console.log("Ошибка HTTP: " + responses.status);
    }
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Insta</h1>
        </header>
        {/* <FormInfo  MethodInfo={this.getInsta}/> */}
        
        <div className="container">
          <div className="row justify-content-center">
            <Photo
                ItemsPhoto={this.state.Imagesss}
            />
          </div>
        </div>
        
      </div>
    )
  }
}

export default App;
