import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_401_5698} />
      <View style={styles.View_401_5727}>
        <View style={styles.View_401_5728}>
          <Text style={styles.Text_401_5728}>철수재고 현황</Text>
        </View>
        <View style={styles.View_401_5729} />
        <View style={styles.View_401_5730} />
        <View style={styles.View_401_5731}>
          <View style={styles.View_401_5732}>
            <Text style={styles.Text_401_5732}>30</Text>
          </View>
          <View style={styles.View_401_5733}>
            <Text style={styles.Text_401_5733}>식품</Text>
          </View>
        </View>
        <View style={styles.View_401_5734}>
          <View style={styles.View_401_5735}>
            <Text style={styles.Text_401_5735}>10</Text>
          </View>
          <View style={styles.View_401_5736}>
            <Text style={styles.Text_401_5736}>비식품</Text>
          </View>
        </View>
        <View style={styles.View_401_5737}>
          <View style={styles.View_401_5738}>
            <Text style={styles.Text_401_5738}>10</Text>
          </View>
          <View style={styles.View_401_5739}>
            <Text style={styles.Text_401_5739}>테스터</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_401_5740}>
        <View style={styles.View_401_5741}>
          <View style={styles.View_I401_5741_249_1223} />
          <View style={styles.View_I401_5741_249_1224}>
            <View style={styles.View_I401_5741_249_1225}>
              <Text style={styles.Text_I401_5741_249_1225}>발주</Text>
            </View>
            <View style={styles.View_I401_5741_249_1226}>
              <View style={styles.View_I401_5741_249_1226_249_1228} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fa/33bc/48a58d4f2f4a02ffc7a641b995ceb7a9"
                }}
                style={styles.ImageBackground_I401_5741_249_1226_249_1229}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/242c/26a0/25774de169bb10123ea6cb9c92a4eabb"
                }}
                style={styles.ImageBackground_I401_5741_249_1226_249_1232}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_401_5742}>
          <View style={styles.View_I401_5742_249_1223} />
          <View style={styles.View_I401_5742_249_1224}>
            <View style={styles.View_I401_5742_249_1225}>
              <Text style={styles.Text_I401_5742_249_1225}>매입</Text>
            </View>
            <View style={styles.View_I401_5742_249_1226}>
              <View style={styles.View_I401_5742_249_1226_249_1236} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a621/35ec/d436b82757240d7bed9f37450e84727a"
                }}
                style={styles.ImageBackground_I401_5742_249_1226_249_1237}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fa5/f53e/bf6160493d81cd23d77844e33e25a2b5"
                }}
                style={styles.ImageBackground_I401_5742_249_1226_249_1238}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd3d/4919/d4d4f4d27dcbc7c350f8a8b5ccdbc7ee"
                }}
                style={styles.ImageBackground_I401_5742_249_1226_249_1239}
              />
              <View style={styles.View_I401_5742_249_1226_249_1240}>
                <View style={styles.View_I401_5742_249_1226_249_1241} />
                <View style={styles.View_I401_5742_249_1226_249_1242}>
                  <View style={styles.View_I401_5742_249_1226_249_1243} />
                  <View style={styles.View_I401_5742_249_1226_249_1244} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_401_5743}>
          <View style={styles.View_I401_5743_249_1223} />
          <View style={styles.View_I401_5743_249_1224}>
            <View style={styles.View_I401_5743_249_1225}>
              <Text style={styles.Text_I401_5743_249_1225}>재고</Text>
            </View>
            <View style={styles.View_I401_5743_249_1226}>
              <View style={styles.View_I401_5743_249_1226_249_1246} />
              <View style={styles.View_I401_5743_249_1226_249_1247}>
                <View style={styles.View_I401_5743_249_1226_249_1248} />
                <View style={styles.View_I401_5743_249_1226_249_1249} />
                <View style={styles.View_I401_5743_249_1226_249_1250} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_401_5744}>
          <View style={styles.View_I401_5744_249_1223} />
          <View style={styles.View_I401_5744_249_1224}>
            <View style={styles.View_I401_5744_249_1225}>
              <Text style={styles.Text_I401_5744_249_1225}>진열</Text>
            </View>
            <View style={styles.View_I401_5744_249_1226}>
              <View style={styles.View_I401_5744_249_1226_249_1252} />
              <View style={styles.View_I401_5744_249_1226_249_1253}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61a5/489a/a525af4194def4d485d845e15882bd38"
                  }}
                  style={styles.ImageBackground_I401_5744_249_1226_249_1254}
                />
                <View style={styles.View_I401_5744_249_1226_249_1257}>
                  <View style={styles.View_I401_5744_249_1226_249_1258} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fd6/c723/4ac47947e9a9c5555432c05c519121c2"
                    }}
                    style={styles.ImageBackground_I401_5744_249_1226_249_1259}
                  />
                  <View style={styles.View_I401_5744_249_1226_249_1260} />
                  <View style={styles.View_I401_5744_249_1226_249_1261} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f6a/9374/55002caf95e61c6d8efe160ddbf97589"
                    }}
                    style={styles.ImageBackground_I401_5744_249_1226_249_1262}
                  />
                </View>
              </View>
              <View style={styles.View_I401_5744_249_1226_249_1263}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fe8/3a93/1fb4665306bba44a7bf1442709c2d435"
                  }}
                  style={styles.ImageBackground_I401_5744_249_1226_249_1264}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06de/4651/c26b55c35cc6489541d00111d0991233"
                  }}
                  style={styles.ImageBackground_I401_5744_249_1226_249_1267}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8142/dc57/a8875f5c3fb8d44df9e0137fdbab76ff"
                  }}
                  style={styles.ImageBackground_I401_5744_249_1226_249_1268}
                />
                <View style={styles.View_I401_5744_249_1226_249_1269}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a59/1254/e232eefe2b1e6a9efd41d4e6a56de110"
                    }}
                    style={styles.ImageBackground_I401_5744_249_1226_249_1270}
                  />
                  <View style={styles.View_I401_5744_249_1226_249_1271} />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f61/e68f/6b0d896d63c316454066216a0f1e071b"
                  }}
                  style={styles.ImageBackground_I401_5744_249_1226_249_1272}
                />
                <View style={styles.View_I401_5744_249_1226_249_1273}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bb2/104c/0644e653eb44f19426cb77b3fbf01fb8"
                    }}
                    style={styles.ImageBackground_I401_5744_249_1226_249_1274}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/882a/6822/cb72cab82f4bddd597da149dd9d53f3a"
                    }}
                    style={styles.ImageBackground_I401_5744_249_1226_249_1275}
                  />
                  <View style={styles.View_I401_5744_249_1226_249_1276} />
                </View>
                <View style={styles.View_I401_5744_249_1226_249_1277}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/937c/dbdf/3e070683c837f834d7895ae35b364346"
                    }}
                    style={styles.ImageBackground_I401_5744_249_1226_249_1278}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/637f/8714/5a85f55a072a4f4bfa3ae7abc99a6bf9"
                    }}
                    style={styles.ImageBackground_I401_5744_249_1226_249_1279}
                  />
                  <View style={styles.View_I401_5744_249_1226_249_1280} />
                </View>
                <View style={styles.View_I401_5744_249_1226_249_1281} />
                <View style={styles.View_I401_5744_249_1226_249_1282} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_401_5745}>
          <View style={styles.View_I401_5745_249_1223} />
          <View style={styles.View_I401_5745_249_1224}>
            <View style={styles.View_I401_5745_249_1225}>
              <Text style={styles.Text_I401_5745_249_1225}>클리어런스</Text>
            </View>
            <View style={styles.View_I401_5745_249_1226}>
              <View style={styles.View_I401_5745_249_1226_249_1284} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e20c/1283/eada2e6b16e6f336ff1efa10551fc671"
                }}
                style={styles.ImageBackground_I401_5745_249_1226_249_1285}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bf5/e614/a3ef046f48d4bfb4b141248ad127947b"
                }}
                style={styles.ImageBackground_I401_5745_249_1226_249_1286}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bf5/e614/a3ef046f48d4bfb4b141248ad127947b"
                }}
                style={styles.ImageBackground_I401_5745_249_1226_249_1287}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb7e/ccae/694980d347e022aeefbd1b2d042785f8"
                }}
                style={styles.ImageBackground_I401_5745_249_1226_249_1288}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_401_5746}>
          <View style={styles.View_I401_5746_249_1223} />
          <View style={styles.View_I401_5746_249_1224}>
            <View style={styles.View_I401_5746_249_1225}>
              <Text style={styles.Text_I401_5746_249_1225}>점자체재고조사</Text>
            </View>
            <View style={styles.View_I401_5746_249_1226}>
              <View style={styles.View_I401_5746_249_1226_249_1290} />
              <View style={styles.View_I401_5746_249_1226_249_1291}>
                <View style={styles.View_I401_5746_249_1226_249_1292} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea97/dd05/038ccabefb006cd53ca91621cdd7203e"
                  }}
                  style={styles.ImageBackground_I401_5746_249_1226_249_1293}
                />
                <View style={styles.View_I401_5746_249_1226_249_1294} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_401_5747}>
          <View style={styles.View_I401_5747_249_1223} />
          <View style={styles.View_I401_5747_249_1224}>
            <View style={styles.View_I401_5747_249_1225}>
              <Text style={styles.Text_I401_5747_249_1225}>O2O</Text>
            </View>
            <View style={styles.View_I401_5747_249_1226}>
              <View style={styles.View_I401_5747_249_1226_249_1296} />
              <View style={styles.View_I401_5747_249_1226_249_1297}>
                <View style={styles.View_I401_5747_249_1226_249_1298} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec9/bb7e/54eabe1cadb99cedd69b2b28b291456a"
                  }}
                  style={styles.ImageBackground_I401_5747_249_1226_249_1299}
                />
                <View style={styles.View_I401_5747_249_1226_249_1300} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a855/fc73/75c6f4f268820ec1c4bac2c7dc8a67e6"
                  }}
                  style={styles.ImageBackground_I401_5747_249_1226_249_1301}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_401_5748}>
          <View style={styles.View_I401_5748_249_1223} />
          <View style={styles.View_I401_5748_249_1224}>
            <View style={styles.View_I401_5748_249_1225}>
              <Text style={styles.Text_I401_5748_249_1225}>테스터</Text>
            </View>
            <View style={styles.View_I401_5748_249_1226}>
              <View style={styles.View_I401_5748_249_1226_249_1303} />
              <View style={styles.View_I401_5748_249_1226_249_1304}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb60/e0ac/497949e042778480ff4bb8b0449970a1"
                  }}
                  style={styles.ImageBackground_I401_5748_249_1226_249_1305}
                />
                <View style={styles.View_I401_5748_249_1226_249_1306} />
                <View style={styles.View_I401_5748_249_1226_249_1307} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_401_5749}>
          <View style={styles.View_I401_5749_249_1223} />
          <View style={styles.View_I401_5749_249_1224}>
            <View style={styles.View_I401_5749_249_1225}>
              <Text style={styles.Text_I401_5749_249_1225}>유통기한 등록</Text>
            </View>
            <View style={styles.View_I401_5749_249_1226}>
              <View style={styles.View_I401_5749_249_1226_249_1309} />
              <View style={styles.View_I401_5749_249_1226_249_1310}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3095/ae07/a7b18ce4391abd72e8e0396bba9c28db"
                  }}
                  style={styles.ImageBackground_I401_5749_249_1226_249_1311}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bed4/0b98/65388349b572fd5cd02a79b3ee999046"
                  }}
                  style={styles.ImageBackground_I401_5749_249_1226_249_1312}
                />
                <View style={styles.View_I401_5749_249_1226_249_1313} />
                <View style={styles.View_I401_5749_249_1226_249_1314} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876b/4751/3f3a4ad284f53f43c789d07398a308d6"
                }}
                style={styles.ImageBackground_I401_5749_249_1226_249_1315}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c5/30af/4e605e08d9c80be5852b43e5f83b017e"
                }}
                style={styles.ImageBackground_I401_5749_249_1226_249_1316}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_401_5750}>
          <View style={styles.View_I401_5750_249_1223} />
          <View style={styles.View_I401_5750_249_1224}>
            <View style={styles.View_I401_5750_249_1225}>
              <Text style={styles.Text_I401_5750_249_1225}>각종정보</Text>
            </View>
            <View style={styles.View_I401_5750_249_1226}>
              <View style={styles.View_I401_5750_249_1226_249_1318} />
              <View style={styles.View_I401_5750_249_1226_249_1319}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c0d/19e8/86f72ff2be063605888d89933c29703a"
                  }}
                  style={styles.ImageBackground_I401_5750_249_1226_249_1320}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3c1/a868/6e52b051d7baadf3d5a3dac81fd08e95"
                  }}
                  style={styles.ImageBackground_I401_5750_249_1226_249_1321}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_401_5751}>
          <View style={styles.View_I401_5751_249_1223} />
          <View style={styles.View_I401_5751_249_1224}>
            <View style={styles.View_I401_5751_249_1225}>
              <Text style={styles.Text_I401_5751_249_1225}>폐기</Text>
            </View>
            <View style={styles.View_I401_5751_249_1226}>
              <View style={styles.View_I401_5751_249_1226_249_1326} />
              <View style={styles.View_I401_5751_249_1226_249_1327}>
                <View style={styles.View_I401_5751_249_1226_249_1328} />
                <View style={styles.View_I401_5751_249_1226_249_1329} />
                <View style={styles.View_I401_5751_249_1226_249_1330} />
                <View style={styles.View_I401_5751_249_1226_249_1331} />
                <View style={styles.View_I401_5751_249_1226_249_1332} />
                <View style={styles.View_I401_5751_249_1226_249_1333} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_401_5752}>
          <View style={styles.View_401_5753} />
          <View style={styles.View_401_5754}>
            <View style={styles.View_401_5755} />
            <View style={styles.View_401_5756} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_401_5759}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("401_5533"))
        }
      >
        <View style={styles.View_401_5760}>
          <View style={styles.View_401_5761}>
            <View style={styles.View_401_5762} />
            <View style={styles.View_401_5763} />
            <View style={styles.View_401_5764}>
              <View style={styles.View_401_5765}>
                <Text style={styles.Text_401_5765}>105</Text>
              </View>
              <View style={styles.View_401_5766}>
                <Text style={styles.Text_401_5766}>접수확정</Text>
              </View>
            </View>
            <View style={styles.View_401_5767}>
              <View style={styles.View_401_5768}>
                <Text style={styles.Text_401_5768}>10</Text>
              </View>
              <View style={styles.View_401_5769}>
                <Text style={styles.Text_401_5769}>불가</Text>
              </View>
            </View>
            <View style={styles.View_401_5770}>
              <View style={styles.View_401_5771}>
                <Text style={styles.Text_401_5771}>10</Text>
              </View>
              <View style={styles.View_401_5772}>
                <Text style={styles.Text_401_5772}>취소</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_401_5773}>
            <View style={styles.View_401_5774} />
            <View style={styles.View_401_5775}>
              <Text style={styles.Text_401_5775}>Total</Text>
            </View>
            <View style={styles.View_401_5776}>
              <Text style={styles.Text_401_5776}>205</Text>
            </View>
            <View style={styles.View_401_5777}>
              <Text style={styles.Text_401_5777}>빠름</Text>
            </View>
            <View style={styles.View_401_5778}>
              <Text style={styles.Text_401_5778}>40</Text>
            </View>
            <View style={styles.View_401_5779}>
              <Text style={styles.Text_401_5779}>3!4!</Text>
            </View>
            <View style={styles.View_401_5780}>
              <Text style={styles.Text_401_5780}>20</Text>
            </View>
            <View style={styles.View_401_5781}>
              <Text style={styles.Text_401_5781}>24H</Text>
            </View>
            <View style={styles.View_401_5782}>
              <Text style={styles.Text_401_5782}>5</Text>
            </View>
            <View style={styles.View_401_5783}>
              <Text style={styles.Text_401_5783}>미드나잇</Text>
            </View>
            <View style={styles.View_401_5784}>
              <Text style={styles.Text_401_5784}>10</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1c9/ea08/0f4fc45d63cc01b3e3ab66efd96fc843"
              }}
              style={styles.ImageBackground_401_5785}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1c9/ea08/0f4fc45d63cc01b3e3ab66efd96fc843"
              }}
              style={styles.ImageBackground_401_5787}
            />
          </View>
          <View style={styles.View_401_5789} />
        </View>
        <View style={styles.View_401_5790}>
          <Text style={styles.Text_401_5790}>오늘드림 주문현황</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_401_5805}>
        <View style={styles.View_401_5806}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b15c/b9de/5e77206d1be28c755aeacb9cd7622bb0"
            }}
            style={styles.ImageBackground_401_5807}
          />
          <View style={styles.View_401_5808} />
        </View>
        <View style={styles.View_401_5809}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07ab/19c9/fa3c17121c5ae6411abafe6cd572897c"
            }}
            style={styles.ImageBackground_401_5810}
          />
          <View style={styles.View_401_5811} />
        </View>
      </View>
      <View style={styles.View_401_5812}>
        <View style={styles.View_401_5813}>
          <View style={styles.View_401_5814} />
          <View style={styles.View_401_5815}>
            <Text style={styles.Text_401_5815}>55,652</Text>
          </View>
          <View style={styles.View_401_5816}>
            <Text style={styles.Text_401_5816}>435,233</Text>
          </View>
          <View style={styles.View_401_5817}>
            <Text style={styles.Text_401_5817}>달성률</Text>
          </View>
          <View style={styles.View_401_5818}>
            <Text style={styles.Text_401_5818}>객수</Text>
          </View>
          <View style={styles.View_401_5819}>
            <Text style={styles.Text_401_5819}>객단가 </Text>
          </View>
          <View style={styles.View_401_5820}>
            <Text style={styles.Text_401_5820}>21.54</Text>
          </View>
        </View>
        <View style={styles.View_401_5821}>
          <View style={styles.View_401_5822} />
          <View style={styles.View_401_5823}>
            <Text style={styles.Text_401_5823}>매출액 </Text>
          </View>
          <View style={styles.View_401_5824}>
            <View style={styles.View_401_5825} />
            <View style={styles.View_401_5826} />
            <View style={styles.View_401_5827}>
              <Text style={styles.Text_401_5827}>21%</Text>
            </View>
          </View>
          <View style={styles.View_401_5828}>
            <Text style={styles.Text_401_5828}>106,639,000</Text>
          </View>
          <View style={styles.View_401_5829}>
            <Text style={styles.Text_401_5829}>22,971,607</Text>
          </View>
          <View style={styles.View_401_5830}>
            <Text style={styles.Text_401_5830}>목표액</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_401_5831}>
        <View style={styles.View_401_5832}>
          <Text style={styles.Text_401_5832}>올리브영 명동 플래그십</Text>
        </View>
        <View style={styles.View_401_5833}>
          <Text style={styles.Text_401_5833}>2021.12.06 (월)</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7d0/87c9/2bf53aca5fa6f6e1e11319b80d2d8dd2"
          }}
          style={styles.ImageBackground_401_5834}
        />
        <View style={styles.View_401_5835}>
          <Text style={styles.Text_401_5835}>11℃ / -1℃ </Text>
        </View>
      </View>
      <View style={styles.View_401_5836}>
        <View style={styles.View_I401_5836_185_339} />
        <View style={styles.View_I401_5836_185_340}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I401_5836_185_340_185_345}
          />
          <View style={styles.View_I401_5836_185_340_185_346}>
            <View style={styles.View_I401_5836_185_340_185_347} />
            <View style={styles.View_I401_5836_185_340_185_348} />
            <View style={styles.View_I401_5836_185_340_185_349} />
          </View>
        </View>
        <View style={styles.View_I401_5836_185_341}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I401_5836_185_341_185_351}
          />
          <View style={styles.View_I401_5836_185_341_185_352}>
            <View style={styles.View_I401_5836_185_341_185_353} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed99/3a84/fd10355f4fc98e2969d5d492e615b135"
              }}
              style={styles.ImageBackground_I401_5836_185_341_185_354}
            />
          </View>
        </View>
        <View style={styles.View_I401_5836_185_342}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f06/d9b5/e7c7cba4efa245d4c750d675b3fb3849"
            }}
            style={styles.ImageBackground_I401_5836_185_342_185_356}
          />
          <View style={styles.View_I401_5836_185_342_185_357}>
            <Text style={styles.Text_I401_5836_185_342_185_357}>8</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3202/63c4/ab4b529159ec8e3c3073fd8610613f86"
          }}
          style={styles.ImageBackground_I401_5836_185_343}
        />
      </View>
      <View style={styles.View_401_5757}>
        <View style={styles.View_I401_5757_128_2259} />
        <View style={styles.View_I401_5757_201_2727}>
          <View style={styles.View_I401_5757_201_2728} />
          <View style={styles.View_I401_5757_201_2817}>
            <View style={styles.View_I401_5757_201_2818} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9e6/6f16/d3c2a4b2a4c14a8ac63b362bbb963384"
              }}
              style={styles.ImageBackground_I401_5757_201_2819}
            />
          </View>
          <View style={styles.View_I401_5757_201_2730}>
            <Text style={styles.Text_I401_5757_201_2730}>홈</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I401_5757_128_2262}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("249_1356"))
          }
        >
          <View style={styles.View_I401_5757_128_2262_185_480} />
          <View style={styles.View_I401_5757_128_2262_185_481}>
            <View style={styles.View_I401_5757_128_2262_185_481_185_490} />
            <View style={styles.View_I401_5757_128_2262_185_481_185_491}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/931b/b84a/aceb3f4c0d2e7c7af89b23df24f0ede1"
                }}
                style={
                  styles.ImageBackground_I401_5757_128_2262_185_481_185_492
                }
              />
              <View style={styles.View_I401_5757_128_2262_185_481_185_495} />
            </View>
          </View>
          <View style={styles.View_I401_5757_128_2262_185_482}>
            <Text style={styles.Text_I401_5757_128_2262_185_482}>검색</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I401_5757_128_2263}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("249_1363"))
          }
        >
          <View style={styles.View_I401_5757_128_2263_185_480} />
          <View style={styles.View_I401_5757_128_2263_185_481}>
            <View style={styles.View_I401_5757_128_2263_185_481_185_484} />
            <View style={styles.View_I401_5757_128_2263_185_481_185_485}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/adc9/7ba5eeeb9728a9582d957027455cc9f1"
                }}
                style={
                  styles.ImageBackground_I401_5757_128_2263_185_481_185_486
                }
              />
              <View style={styles.View_I401_5757_128_2263_185_481_185_487} />
              <View style={styles.View_I401_5757_128_2263_185_481_185_488} />
            </View>
          </View>
          <View style={styles.View_I401_5757_128_2263_185_482}>
            <Text style={styles.Text_I401_5757_128_2263_185_482}>이력</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I401_5757_128_2264}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("249_1370"))
          }
        >
          <View style={styles.View_I401_5757_128_2264_185_480} />
          <View style={styles.View_I401_5757_128_2264_185_481}>
            <View style={styles.View_I401_5757_128_2264_185_481_185_497} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/adc9/7ba5eeeb9728a9582d957027455cc9f1"
              }}
              style={styles.ImageBackground_I401_5757_128_2264_185_481_185_498}
            />
            <View style={styles.View_I401_5757_128_2264_185_481_185_499}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ea2/647d/651e386e82625404e6bdbe30f592fcef"
                }}
                style={
                  styles.ImageBackground_I401_5757_128_2264_185_481_185_500
                }
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2866/f13d/40e42c95bf1502051356585dc81b70d0"
                }}
                style={
                  styles.ImageBackground_I401_5757_128_2264_185_481_185_501
                }
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfc1/ccb0/ac01317ff81f1f6f5a8b217af93a74de"
              }}
              style={styles.ImageBackground_I401_5757_128_2264_185_481_185_504}
            />
          </View>
          <View style={styles.View_I401_5757_128_2264_185_482}>
            <Text style={styles.Text_I401_5757_128_2264_185_482}>마이</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 247, 247, 1)" },
  View_2: { height: hp("100%") },
  View_401_5698: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("180%"),
    minHeight: hp("180%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_401_5727: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("83%")
  },
  View_401_5728: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5728: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5729: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_401_5730: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("5%"),
    backgroundColor: "rgba(237, 237, 237, 1)"
  },
  View_401_5731: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%")
  },
  View_401_5732: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5732: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5733: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5733: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5734: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("7%")
  },
  View_401_5735: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5735: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5736: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5736: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5737: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("7%")
  },
  View_401_5738: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5738: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5739: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5739: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5740: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("100%")
  },
  View_401_5741: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5741_249_1223: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_I401_5741_249_1224: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%")
  },
  View_I401_5741_249_1225: {
    width: wp("7%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I401_5741_249_1225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_5741_249_1226: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5741_249_1226_249_1228: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 255, 0, 1)",
    opacity: 0.20000000298023224
  },
  ImageBackground_I401_5741_249_1226_249_1229: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I401_5741_249_1226_249_1232: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_401_5742: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5742_249_1223: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_I401_5742_249_1224: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%")
  },
  View_I401_5742_249_1225: {
    width: wp("7%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I401_5742_249_1225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_5742_249_1226: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5742_249_1226_249_1236: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 255, 0, 1)",
    opacity: 0.20000000298023224
  },
  ImageBackground_I401_5742_249_1226_249_1237: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  ImageBackground_I401_5742_249_1226_249_1238: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  ImageBackground_I401_5742_249_1226_249_1239: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I401_5742_249_1226_249_1240: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%")
  },
  View_I401_5742_249_1226_249_1241: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 73, 73, 1)"
  },
  View_I401_5742_249_1226_249_1242: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I401_5742_249_1226_249_1243: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 73, 73, 1)"
  },
  View_I401_5742_249_1226_249_1244: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 73, 73, 1)"
  },
  View_401_5743: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5743_249_1223: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_I401_5743_249_1224: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%")
  },
  View_I401_5743_249_1225: {
    width: wp("7%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I401_5743_249_1225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_5743_249_1226: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5743_249_1226_249_1246: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 255, 0, 1)",
    opacity: 0.20000000298023224
  },
  View_I401_5743_249_1226_249_1247: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I401_5743_249_1226_249_1248: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(200, 217, 156, 1)",
    borderColor: "rgba(73, 73, 73, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_I401_5743_249_1226_249_1249: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(73, 73, 73, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I401_5743_249_1226_249_1250: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(73, 73, 73, 1)",
    borderWidth: 2
  },
  View_401_5744: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5744_249_1223: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_I401_5744_249_1224: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%")
  },
  View_I401_5744_249_1225: {
    width: wp("7%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I401_5744_249_1225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_5744_249_1226: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5744_249_1226_249_1252: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 255, 0, 1)",
    opacity: 0.20000000298023224
  },
  View_I401_5744_249_1226_249_1253: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I401_5744_249_1226_249_1254: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_5744_249_1226_249_1257: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_5744_249_1226_249_1258: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(200, 217, 156, 1)"
  },
  ImageBackground_I401_5744_249_1226_249_1259: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_5744_249_1226_249_1260: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(73, 73, 73, 1)"
  },
  View_I401_5744_249_1226_249_1261: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(73, 73, 73, 1)"
  },
  ImageBackground_I401_5744_249_1226_249_1262: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_5744_249_1226_249_1263: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  ImageBackground_I401_5744_249_1226_249_1264: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I401_5744_249_1226_249_1267: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I401_5744_249_1226_249_1268: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I401_5744_249_1226_249_1269: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I401_5744_249_1226_249_1270: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_5744_249_1226_249_1271: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I401_5744_249_1226_249_1272: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I401_5744_249_1226_249_1273: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I401_5744_249_1226_249_1274: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I401_5744_249_1226_249_1275: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_5744_249_1226_249_1276: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I401_5744_249_1226_249_1277: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I401_5744_249_1226_249_1278: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I401_5744_249_1226_249_1279: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I401_5744_249_1226_249_1280: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(73, 73, 73, 1)"
  },
  View_I401_5744_249_1226_249_1281: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I401_5744_249_1226_249_1282: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_401_5745: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5745_249_1223: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_I401_5745_249_1224: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  View_I401_5745_249_1225: {
    width: wp("18%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_5745_249_1225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_5745_249_1226: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5745_249_1226_249_1284: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 255, 0, 1)",
    opacity: 0.20000000298023224
  },
  ImageBackground_I401_5745_249_1226_249_1285: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I401_5745_249_1226_249_1286: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  ImageBackground_I401_5745_249_1226_249_1287: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%")
  },
  ImageBackground_I401_5745_249_1226_249_1288: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_401_5746: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5746_249_1223: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_I401_5746_249_1224: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_I401_5746_249_1225: {
    width: wp("25%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_5746_249_1225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_5746_249_1226: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5746_249_1226_249_1290: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 255, 0, 1)",
    opacity: 0.20000000298023224
  },
  View_I401_5746_249_1226_249_1291: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I401_5746_249_1226_249_1292: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(73, 73, 73, 1)",
    borderWidth: 2
  },
  ImageBackground_I401_5746_249_1226_249_1293: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I401_5746_249_1226_249_1294: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(200, 217, 156, 1)",
    borderColor: "rgba(73, 73, 73, 1)",
    borderWidth: 2
  },
  View_401_5747: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5747_249_1223: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_I401_5747_249_1224: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%")
  },
  View_I401_5747_249_1225: {
    width: wp("8%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I401_5747_249_1225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_5747_249_1226: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5747_249_1226_249_1296: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 255, 0, 1)",
    opacity: 0.20000000298023224
  },
  View_I401_5747_249_1226_249_1297: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I401_5747_249_1226_249_1298: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(73, 73, 73, 1)",
    borderWidth: 2
  },
  ImageBackground_I401_5747_249_1226_249_1299: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_5747_249_1226_249_1300: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(73, 73, 73, 1)"
  },
  ImageBackground_I401_5747_249_1226_249_1301: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_401_5748: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5748_249_1223: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_I401_5748_249_1224: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%")
  },
  View_I401_5748_249_1225: {
    width: wp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I401_5748_249_1225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_5748_249_1226: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5748_249_1226_249_1303: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 255, 0, 1)",
    opacity: 0.20000000298023224
  },
  View_I401_5748_249_1226_249_1304: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I401_5748_249_1226_249_1305: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I401_5748_249_1226_249_1306: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(73, 73, 73, 1)",
    borderWidth: 2
  },
  View_I401_5748_249_1226_249_1307: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(73, 73, 73, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_401_5749: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("53%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I401_5749_249_1223: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_I401_5749_249_1224: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_I401_5749_249_1225: {
    width: wp("23%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_5749_249_1225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_5749_249_1226: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5749_249_1226_249_1309: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 255, 0, 1)",
    opacity: 0.20000000298023224
  },
  View_I401_5749_249_1226_249_1310: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I401_5749_249_1226_249_1311: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I401_5749_249_1226_249_1312: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_5749_249_1226_249_1313: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(73, 73, 73, 1)"
  },
  View_I401_5749_249_1226_249_1314: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(73, 73, 73, 1)"
  },
  ImageBackground_I401_5749_249_1226_249_1315: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  ImageBackground_I401_5749_249_1226_249_1316: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%")
  },
  View_401_5750: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5750_249_1223: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_I401_5750_249_1224: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  View_I401_5750_249_1225: {
    width: wp("14%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_5750_249_1225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_5750_249_1226: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5750_249_1226_249_1318: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 255, 0, 1)",
    opacity: 0.20000000298023224
  },
  View_I401_5750_249_1226_249_1319: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I401_5750_249_1226_249_1320: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I401_5750_249_1226_249_1321: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_401_5751: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5751_249_1223: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_I401_5751_249_1224: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%")
  },
  View_I401_5751_249_1225: {
    width: wp("7%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I401_5751_249_1225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_5751_249_1226: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5751_249_1226_249_1326: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 255, 0, 1)",
    opacity: 0.20000000298023224
  },
  View_I401_5751_249_1226_249_1327: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I401_5751_249_1226_249_1328: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(73, 73, 73, 1)",
    borderWidth: 2
  },
  View_I401_5751_249_1226_249_1329: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(73, 73, 73, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I401_5751_249_1226_249_1330: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(200, 217, 156, 1)",
    borderColor: "rgba(73, 73, 73, 1)",
    borderWidth: 2
  },
  View_I401_5751_249_1226_249_1331: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    backgroundColor: "rgba(73, 73, 73, 1)"
  },
  View_I401_5751_249_1226_249_1332: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(73, 73, 73, 1)"
  },
  View_I401_5751_249_1226_249_1333: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(73, 73, 73, 1)"
  },
  View_401_5752: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("53%")
  },
  View_401_5753: {
    width: wp("29%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_401_5754: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("6%")
  },
  View_401_5755: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 236, 236, 1)"
  },
  View_401_5756: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(236, 236, 236, 1)"
  },
  TouchableOpacity_401_5759: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("55%")
  },
  View_401_5760: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_401_5761: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  View_401_5762: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_401_5763: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(237, 237, 237, 1)"
  },
  View_401_5764: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_401_5765: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5765: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5766: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5766: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5767: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%")
  },
  View_401_5768: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5768: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5769: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5769: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5770: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("2%")
  },
  View_401_5771: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5771: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5772: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5772: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5773: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_401_5774: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_401_5775: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_401_5775: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5776: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_401_5776: {
    color: "rgba(147, 203, 66, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5777: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_401_5777: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5778: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_401_5778: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5779: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_401_5779: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5780: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_401_5780: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5781: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_401_5781: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5782: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_401_5782: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5783: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_401_5783: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5784: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_401_5784: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_401_5785: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("3%")
  },
  ImageBackground_401_5787: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("3%")
  },
  View_401_5789: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(234, 234, 234, 1)",
    borderWidth: 1
  },
  View_401_5790: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_5790: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5805: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("11%")
  },
  View_401_5806: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_401_5807: {
    width: wp("29%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_401_5808: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("-3%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_401_5809: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  ImageBackground_401_5810: {
    width: wp("50%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_401_5811: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("-5%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_401_5812: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%")
  },
  View_401_5813: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  View_401_5814: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 64, 71, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_401_5815: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_401_5815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5816: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_401_5816: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5817: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_401_5817: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5818: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_401_5818: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5819: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_401_5819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5820: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_401_5820: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5821: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_401_5822: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(68, 75, 84, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_401_5823: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_401_5823: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5824: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%")
  },
  View_401_5825: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 64, 71, 1)"
  },
  View_401_5826: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(154, 222, 56, 1)"
  },
  View_401_5827: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_401_5827: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5828: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_401_5828: {
    color: "rgba(154, 222, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5829: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_401_5829: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5830: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_401_5830: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5831: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%")
  },
  View_401_5832: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_401_5832: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5833: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_401_5833: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_401_5834: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("5%")
  },
  View_401_5835: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_401_5835: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_5836: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5836_185_339: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_I401_5836_185_340: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5836_185_340_185_345: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I401_5836_185_340_185_346: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I401_5836_185_340_185_347: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I401_5836_185_340_185_348: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I401_5836_185_340_185_349: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I401_5836_185_341: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5836_185_341_185_351: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I401_5836_185_341_185_352: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I401_5836_185_341_185_353: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(147, 203, 66, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_I401_5836_185_341_185_354: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_5836_185_342: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I401_5836_185_342_185_356: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I401_5836_185_342_185_357: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I401_5836_185_342_185_357: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.6000000000000001,
    textTransform: "none"
  },
  ImageBackground_I401_5836_185_343: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_401_5757: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("91%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5757_128_2259: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I401_5757_201_2727: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5757_201_2728: {
    width: wp("16%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_I401_5757_201_2817: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5757_201_2818: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  ImageBackground_I401_5757_201_2819: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_5757_201_2730: {
    width: wp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I401_5757_201_2730: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I401_5757_128_2262: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5757_128_2262_185_480: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_I401_5757_128_2262_185_481: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5757_128_2262_185_481_185_490: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I401_5757_128_2262_185_481_185_491: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I401_5757_128_2262_185_481_185_492: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_5757_128_2262_185_481_185_495: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(136, 136, 136, 1)"
  },
  View_I401_5757_128_2262_185_482: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I401_5757_128_2262_185_482: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I401_5757_128_2263: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5757_128_2263_185_480: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_I401_5757_128_2263_185_481: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5757_128_2263_185_481_185_484: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_I401_5757_128_2263_185_481_185_485: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I401_5757_128_2263_185_481_185_486: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_5757_128_2263_185_481_185_487: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I401_5757_128_2263_185_481_185_488: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I401_5757_128_2263_185_482: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I401_5757_128_2263_185_482: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I401_5757_128_2264: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5757_128_2264_185_480: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_I401_5757_128_2264_185_481: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_5757_128_2264_185_481_185_497: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  ImageBackground_I401_5757_128_2264_185_481_185_498: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I401_5757_128_2264_185_481_185_499: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I401_5757_128_2264_185_481_185_500: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I401_5757_128_2264_185_481_185_501: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I401_5757_128_2264_185_481_185_504: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I401_5757_128_2264_185_482: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I401_5757_128_2264_185_482: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
