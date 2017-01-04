#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import unittest

from ludobox.data.crawler import handshake, build_url, download_index
from ludobox.config import read_config

class TestLudoboxWebDataUpdate(unittest.TestCase):
    """Testing utils function"""

    def setUp(self):
        test_config_file = os.path.join(os.getcwd(),"tests/test_config.yml")
        self.config = read_config(config_path=test_config_file)

    def test_build_url(self):
        url = build_url("index.json")
        self.assertEquals(url, "http://localhost:8080/api/index.json")

    def test_handshake(self):
        """Should shake hands with the distant server and get its name."""
        base_url = self.config["web_server_url"]
        res = handshake()
        self.assertEquals(res["name"], "My LudoBox")

    def test_get_game_index_file(self):
        """Should retrieve an index containing all games"""
        index = download_index()
        self.assertTrue(type(index), list)