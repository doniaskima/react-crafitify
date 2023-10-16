import { Avatar, Badge } from "react-craftify-core";
 
const BadgeComponent = () => {
    return(
        <div>
          <Badge count={ 0 }>
            <Avatar
              src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
              color="blue" 
              shadow="lg" 
            />
          </Badge>
  
          <Badge
            count={ 5 } >
            <Avatar
              style={{ marginLeft: "20px" }}
              src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
              size="50px" />
          </Badge>
  
          <Badge text="new">
            <Avatar
              style={{ marginLeft: "20px" }}
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              size="50px" />
          </Badge>
  
        </div>
      )
}

export default BadgeComponent
