#git clone https://github.com/lucasjellema/jet-composite-component-showroom
# cd jet-composite-component-showroom

git pull
wait

npm install
wait
ojet build 
# this line produced an error on uglifying one of the files
#ojet build  --release
wait
cp -a ./web/. ./jet-on-node/public
wait
cd jet-on-node
wait
npm install
wait
zip -r componentsshowroom.zip .
wait
cd /oracle-cloud-psm-cli/jet-composite-component-showroom/jet-on-node

psm accs push -n JETCompositeComponentsShowroom -r node -s hourly -d deployment.json -p componentsshowroom.zip


