import React, { Component } from "react";
import {
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import styles from "./styles";
import { Creators as UsersActions } from "~/store/ducks/users";

class AddUser extends Component {
  state = {
    inputValue: ""
  };
  addUser = () => {
    const { modal } = this.props;
    this.props.addUserRequest(this.state.inputValue, modal.coordinates);
    this.setState({ inputValue: "" });
  };
  render() {
    const { modal, error, loading } = this.props;
    return (
      <Modal animationType="none" transparent={true} visible={modal.visible}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.modalView}>
            <Text style={styles.title}>Adicionar novo local</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Usuário no github"
              value={this.state.inputValue}
              onChangeText={value => this.setState({ inputValue: value })}
              onSubmitEditing={this.addUser}
              autoFocus={true}
            />
            <View style={styles.actionContainer}>
              <TouchableOpacity
                style={styles.actionCancel}
                onPress={() => {
                  this.setState({ inputValue: "" });
                  this.props.setModalVisibility({ visible: false });
                }}
              >
                <Text style={styles.actionText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionSave}
                onPress={this.addUser}
              >
                <Text style={styles.actionText}>Salvar</Text>
              </TouchableOpacity>
            </View>
            {error && !loading && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            )}
            {loading && (
              <View style={styles.errorContainer}>
                <ActivityIndicator />
              </View>
            )}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
  static propTypes = {
    modal: PropTypes.shape({
      visible: PropTypes.bool.isRequired,
      coordinates: PropTypes.array
    }).isRequired,
    error: PropTypes.string,
    setModalVisibility: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired
  };
}

const mapStateToProps = state => ({
  modal: state.users.modal,
  error: state.users.error,
  loading: state.users.loading
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setModalVisibility: UsersActions.setModalVisibility,
      addUserRequest: UsersActions.addUserRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
