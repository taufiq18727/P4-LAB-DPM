import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScoreButton from '../components/ScoreButton';
import WinnerMessage from '../components/WinnerMessage';

const MatchScreen = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleScoreChange = (team, increment) => {
    if (winner) return;

    if (team === 'A') {
      const newScore = Math.max(0, scoreA + increment);
      setScoreA(newScore);
      if (newScore === 10) setWinner('A');
    } else if (team === 'B') {
      const newScore = Math.max(0, scoreB + increment);
      setScoreB(newScore);
      if (newScore === 10) setWinner('B');
    }
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Pertandingan Futsal ⚽</Text>

      <View style={styles.scoreContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Tim A</Text>
          <Text style={styles.score}>{scoreA}</Text>
        </View>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Tim B</Text>
          <Text style={styles.score}>{scoreB}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <ScoreButton label="+ Tim A" onPress={() => handleScoreChange('A', 1)} />
        <ScoreButton label="- Tim A" onPress={() => handleScoreChange('A', -1)} />
        <ScoreButton label="+ Tim B" onPress={() => handleScoreChange('B', 1)} />
        <ScoreButton label="- Tim B" onPress={() => handleScoreChange('B', -1)} />
      </View>

      {winner && <WinnerMessage winner={winner} />}

      <ScoreButton label="🔄 Reset Pertandingan" onPress={handleReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  teamContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E8EAF6',
    borderRadius: 10,
    elevation: 3,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5C6BC0',
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3E4E88',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
});

export default MatchScreen;
