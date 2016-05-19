var React = require("-aek/react");
var Container = require("-components/container");
var {VBox} = require("-components/layout");
var {BannerHeader} = require("-components/header");
var {BasicSegment} = require("-components/segment");

var Screen = React.createClass({
  render:function() {

    return (
      <Container>
        <VBox>
          <BannerHeader theme="alt" key="header" flex={0}>My Screen</BannerHeader>
          <BasicSegment>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            <p>Sed posuere consectetur est at lobortis.</p>
          </BasicSegment>

        </VBox>
      </Container>
    );

  }

});

React.render(<Screen/>,document.body);
