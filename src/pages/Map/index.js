import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MapboxGL from "@mapbox/react-native-mapbox-gl";

import styles from "./styles";
import AddUser from "~/pages/AddUser";
import { Creators as UsersActions } from "~/store/ducks/users";

MapboxGL.setAccessToken(
  "pk.eyJ1Ijoicmxpc2JvYXJzIiwiYSI6ImNqdjVrZDc5cTAzMjg0M20zOTc5YXc1bjAifQ.ONjJRyzgRkDTyMvth5LYNA"
);

class Map extends Component {
  state = {
    modalVisible: false
  };
  renderUserPointer(user) {
    return (
      <MapboxGL.PointAnnotation
        id={user.login}
        key={user.id}
        coordinate={user.coordinates}
        title=""
      >
        <Image
          style={styles.pointerImage}
          source={{
            uri: user.avatar_url
          }}
        />
        <MapboxGL.Callout>
          <View style={styles.calloutContainer}>
            <Text style={styles.calloutTitle}>{user.login}</Text>
            <Text>{user.bio}</Text>
          </View>
        </MapboxGL.Callout>
      </MapboxGL.PointAnnotation>
    );
  }

  render() {
    return (
      <Fragment>
        <AddUser />
        <MapboxGL.MapView
          centerCoordinate={[-49.6451598, -27.2177659]}
          style={styles.container}
          onLongPress={({ geometry }) => {
            this.props.setModalVisibility({
              visible: true,
              coordinates: geometry.coordinates
            });
          }}
        >
          {this.props.users.map(user => this.renderUserPointer(user))}
        </MapboxGL.MapView>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.data
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { setModalVisibility: UsersActions.setModalVisibility },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
