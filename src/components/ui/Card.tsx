import { Text, View, StyleSheet, Image } from 'react-native';
import { THUMBNAIL_SIZE } from '../../data';
import { handleStat, handleDate } from '../../utils';

const showThumbnail = thumbnail => thumbnail && thumbnail.toLowerCase() !== 'nsfw' ? true : false;

const CardImage = ({thumbnail}) => {
  return (
    <View style={styles.cardImageContainer}>
      <View style={styles.thumbnailContainer}>
        <Image style={styles.thumbnail} source={{uri: thumbnail}} />
      </View>
    </View>
  );
};

const CardContent = ({ title, author, showDetails }) => {
  return (
    <View style={styles.cardContentContainer}>

      <View style={styles.titleContainer}>
        <Text  numberOfLines={showDetails ? undefined : 1} style={styles.title}>{title}</Text>
      </View>
      <View style={styles.authorContainer}>
        <Text>{author}</Text>
      </View>
    </View>
  );
};

const CardDetails = ({score,comments,created}) => {
  return (
    <View style={styles.cardDetailsContainer}>
      <View>
        <Text style={styles.detailNumber}>{handleStat(score)}</Text>
        <Text style={styles.detailText}>Score</Text>
      </View>
      <View>
        <Text style={styles.detailNumber}>{handleStat(comments)}</Text>
        <Text style={styles.detailText}>Comments</Text>
      </View>
      <View>
        <Text style={styles.detailNumber}>{handleDate(created)}</Text>
        <Text style={styles.detailText}>Created at</Text>
      </View>
    </View>
  );
};

export const Card = ({item, showDetails = false}) => {
  return (
    <View style={styles.container}>
       <View style={styles.cardRow}>
        {showThumbnail(item.thumbnail) && <CardImage thumbnail={item.thumbnail}/>}
      <CardContent title={item.title} author={item.author} showDetails={showDetails}/>
      </View>
        {showDetails && <CardDetails score={item.score} comments={item.num_comments} created={item.created} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    padding: 15,
  },
  cardRow: {
    flexDirection:'row',
  },
  cardImageContainer: {
    flexGrow: 0,
  },
  thumbnail: {
    width: THUMBNAIL_SIZE,
    height: THUMBNAIL_SIZE,
    borderRadius:5,
  },
  thumbnailContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  cardContentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  titleContainer: {
    marginBottom:5,
  },
  title:{
    fontSize:16,
    fontWeight:'bold',
  },
  authorContainer:{
    marginBottom:5,
  },
  languageText:{
    alignSelf: 'flex-start',
    borderRadius:3,
    padding:4,
    color:'white',
    backgroundColor:'#0366d6',
  },
  cardDetailsContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  detailText: {
    textAlign:'center',
  },
  detailNumber: {
    textAlign:'center',
    marginBottom:5,
    marginTop:5,
    fontWeight:'bold',
  },
});
