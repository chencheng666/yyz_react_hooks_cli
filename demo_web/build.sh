#!/bin/bash
dir='../../web/static/demo'
bak_dir='../../web/static/demo_bak'
build='./dist'
if [  -d $build ]; then
    echo '打包成功'
    if [  -d $dir ]; then
        echo '开始备份'
        rm -rf $bak_dir
        mv $dir $bak_dir
        echo '备份完成'
    fi
    cp -af $build $dir
    echo '更新完成'
fi