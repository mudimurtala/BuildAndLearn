#!/bin/bash
echo "This is mudi!"
curl -s https://api.github.com/users/mudimurtala | jq '.[].id'


URL="https://acad.learn2earn.ng/assets/superhero/all.json"
curl -s https://acad.learn2earn.ng/assets/superhero/all.json | jq -r '.[] | select(.id == 170) | .name, .powerstats.power, .appearance.gender'ls