import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { useReports } from '@/hooks/queries/useReports';

export default function FeedView() {
  const { data, isLoading, isError } = useReports();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed View</Text>
      <FlatList
        data={data}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }) => <Text>{item.title ?? 'Report'}</Text>}
      />
    </View>
  );
}
