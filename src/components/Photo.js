import React  from 'react'

// { this.state.images.map((image) => {
//   return <img src={image.images.thumbnail.url} />
// })}

export default class Photo extends React.Component {
    
    state = {
        ItemsPhoto: null,
        showMore: 5,
        BtnShow: true
    }
    handleClick(lengAR) {
        if(lengAR <= this.state.showMore){
            this.setState({showMore: lengAR})
            // добавит класс
            this.setState({BtnShow: false})
        }else{
            this.setState({showMore: this.state.showMore + 5})
        }
        
    }
    render() {
        const iremsprops = this.props
        // console.log(iremsprops.ItemsPhoto)
        // console.log(this.state.showMore)
        const newsTemplate = iremsprops.ItemsPhoto.slice(0, this.state.showMore).map((Items, index) =>{
            let DateN = parseInt(Items.created_time)*1000
            let DateTime = new Date(DateN)
            function formatDate(date) {
                var dd = date.getDate();
                if (dd < 10) dd = '0' + dd;
                var mm = date.getMonth() + 1;
                if (mm < 10) mm = '0' + mm;
                var yy = date.getFullYear() % 100;
                if (yy < 10) yy = '0' + yy;
                return dd + '.' + mm + '.' + yy;
            }

            let TemplateTags
            
            if(Items.tags.length > 0) {
                TemplateTags = Items.tags.map((tags) => {
                    return `#${tags} `
                })
            }
            return (
                <div key={index} className="card col-md-7">
                    <img src={Items.images.standard_resolution.url} className="card-img-top" alt={Items.user.username} />
                    <div className="card-body">
                        <span className="info-user">
                            <span>{Items.user.username}</span>
                            <img src={Items.user.profile_picture} alt={Items.user.username} />
                        </span>
                        <p className="likes">{Items.likes.count} &#10084;, Comments: {Items.comments.count}</p>
                        <p className="card-text">
                            {Items.caption ? `${Items.caption.text}` : 'Текст пустой'}
                        </p>
                        <p className="tags">
                            {TemplateTags?
                                `Теги: ${TemplateTags} `
                                : `Тегов нет`
                            }
                        </p>
                        <small>Дата создания: {formatDate(DateTime)} </small>
                    </div>
                    
                </div>
            )
        })
        return (
            <>
                {newsTemplate? newsTemplate : `Ошибка!`}
                {this.state.BtnShow? <div className="col-12 rowBtn">
                    <button className="btn btn-info" onClick={()=> this.handleClick(iremsprops.ItemsPhoto.length)}>Show more</button>
                </div> : ``}
                
            </>
        )
    }
}
