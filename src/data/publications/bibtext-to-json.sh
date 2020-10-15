#!/bin/bash

# brew install pandoc pandoc-citeproc
# https://tex.stackexchange.com/questions/268294/convert-existing-bibtex-to-bibjson

find "$PWD" -name "*.bib" | while read citation; do
  pandoc-citeproc --bib2json "$citation" > "${citation%.*}".json
done
