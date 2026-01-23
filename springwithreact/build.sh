cd frontend
npm run build
cd ..
mkdir target
mkdir target/classes
mkdir target/classes/public
cp -r frontend/build/* target/classes/public
