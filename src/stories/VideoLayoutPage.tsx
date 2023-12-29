import Video from 'components/Video/Video';

const VideoLayoutPage = () => {
  const componentArgs = {
    rendering: {
      componentName: 'Video',
      dataSource: 'Video',
    },
    params: {},
    fields: {
      BrightcoveID: {
        value: '6331608600112',
      },
      YoutubeID: {
        value: 'BdCeeB59eRM',
      },
      Caption: {
        value: 'This is caption Text',
      },
      ButtonText: {
        value: 'Watch Overview',
      },
    },
  };

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <section
        style={{
          backgroundColor: 'red',
          padding: '10dvh',
          width: '100%',
        }}
      />
      <section
        style={{
          containerType: 'inline-size',
          width: '50%',
        }}
      >
        <Video {...componentArgs} />
      </section>
      <section
        style={{
          backgroundColor: 'red',
          padding: '10dvh',
          width: '100%',
        }}
      />
    </main>
  );
};

export default VideoLayoutPage;
